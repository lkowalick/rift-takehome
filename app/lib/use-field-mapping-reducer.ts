import { useReducer } from "react"
import { FieldData, FieldMap, NullField } from "./constants"

const initialFieldMap = { riftField: NullField, topCrmField: NullField, bottomCrmField: NullField }

type State = { fieldMaps: FieldMap[], valid: boolean };

type FieldMappingAction =
    | { type: "add" }
    | { type: "update", index: number, value: FieldMap }
    | { type: "delete", index: number }
    | { type: "validate" }

type FieldNames = 'riftField' | 'topCrmField' | 'bottomCrmField';

function IdIsUniqueForField(fieldMap: FieldMap, fieldName: FieldNames, fieldMaps: FieldMap[]) {
    const idToFind = fieldMap[fieldName].value.id;
    return fieldMaps.map(({ [fieldName]: { value: { id } } }) => id).filter((id) => id !== '' && id === idToFind).length <= 1
}

function FieldPresentIfNeeded(fieldToCheck: FieldData, allFields: FieldData[]) {
    return fieldToCheck.value.id !== '' || allFields.every(({ value: { id } }) => id === '')
}

function validateField(fieldMap: FieldMap, fieldName: FieldNames, fieldMaps: FieldMap[]) {
    return IdIsUniqueForField(fieldMap, fieldName, fieldMaps) && FieldPresentIfNeeded(fieldMap[fieldName], Object.values(fieldMap))
}

function validateFields(fieldMap: FieldMap, fieldMaps: FieldMap[]) {
    return {
        riftFieldValid: validateField(fieldMap, 'riftField', fieldMaps),
        topCrmFieldValid: validateField(fieldMap, 'topCrmField', fieldMaps),
        bottomCrmFieldValid: validateField(fieldMap, 'bottomCrmField', fieldMaps),
    }
}

function validate(fieldMaps: FieldMap[]): State {
    const newFieldMaps = [...fieldMaps];
    fieldMaps.forEach((fieldMap, i) => {
        const { riftField, topCrmField, bottomCrmField } = fieldMap
        const { riftFieldValid, topCrmFieldValid, bottomCrmFieldValid } = validateFields(fieldMap, fieldMaps)

        newFieldMaps[i] = {
            riftField: { value: riftField.value, valid: riftFieldValid },
            topCrmField: { value: topCrmField.value, valid: topCrmFieldValid },
            bottomCrmField: { value: bottomCrmField.value, valid: bottomCrmFieldValid },
        }
    });
    const newValid = fieldMaps.some(({ riftField, topCrmField, bottomCrmField }) => riftField.value.id !== '' && topCrmField.value.id !== '' && bottomCrmField.value.id !== '') && newFieldMaps.every(({ riftField, topCrmField, bottomCrmField }) => riftField.valid && topCrmField.valid && bottomCrmField.valid);
    return { valid: newValid, fieldMaps: newFieldMaps }
}

function fieldMappingReducer({ valid, fieldMaps }: State, action: FieldMappingAction): State {
    switch (action.type) {
        case "add": {
            return { valid, fieldMaps: [...fieldMaps, initialFieldMap] };
        }
        case "update": {
            const nextFieldMaps = [...fieldMaps];
            nextFieldMaps[action.index] = action.value;
            return validate(nextFieldMaps);
        }
        case "delete":
            const nextFieldMaps = [...fieldMaps.slice(0, action.index), ...fieldMaps.slice(action.index + 1)]
            return validate(nextFieldMaps);
        default:
            throw new Error('Unknown action type');

    }
}

export default function useFieldMappingReducer() {
    return useReducer(fieldMappingReducer, { fieldMaps: [initialFieldMap], valid: false });
}