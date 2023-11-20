import { useReducer } from "react"
import { FieldData, FieldMap, FieldNames, NullField } from "./constants"

const initialFieldMap = { riftField: NullField, topCrmField: NullField, bottomCrmField: NullField }

export type FieldMappingState = { fieldMaps: FieldMap[], formIsValid: boolean };

type FieldMappingAction =
    | { type: "add" }
    | { type: "update", index: number, value: FieldMap }
    | { type: "delete", index: number }


function idIsUniqueForField(fieldMap: FieldMap, fieldName: FieldNames, fieldMaps: FieldMap[]) {
    const idToFind = fieldMap[fieldName].value.id;
    return fieldMaps.map(({ [fieldName]: { value: { id } } }) => id).filter((id) => id !== '' && id === idToFind).length <= 1
}

function fieldPresentIfNeeded(fieldToCheck: FieldData, allFields: FieldData[]) {
    return fieldToCheck.value.id !== '' || allFields.every(({ value: { id } }) => id === '')
}

function validateField(fieldMap: FieldMap, fieldName: FieldNames, fieldMaps: FieldMap[]) {
    return idIsUniqueForField(fieldMap, fieldName, fieldMaps) && fieldPresentIfNeeded(fieldMap[fieldName], Object.values(fieldMap))
}

function validateFields(fieldMap: FieldMap, fieldMaps: FieldMap[]) {
    return {
        riftFieldValid: validateField(fieldMap, 'riftField', fieldMaps),
        topCrmFieldValid: validateField(fieldMap, 'topCrmField', fieldMaps),
        bottomCrmFieldValid: validateField(fieldMap, 'bottomCrmField', fieldMaps),
    }
}

function validate(fieldMaps: FieldMap[]): FieldMappingState {
    const newFieldMaps = [...fieldMaps];
    let newFormIsValid = fieldMaps.some(({ riftField }) => riftField.value.id !== '');
    fieldMaps.forEach((fieldMap, i) => {
        const { riftField, topCrmField, bottomCrmField } = fieldMap
        const { riftFieldValid, topCrmFieldValid, bottomCrmFieldValid } = validateFields(fieldMap, fieldMaps)

        newFieldMaps[i] = {
            riftField: { value: riftField.value, valid: riftFieldValid },
            topCrmField: { value: topCrmField.value, valid: topCrmFieldValid },
            bottomCrmField: { value: bottomCrmField.value, valid: bottomCrmFieldValid },
        }
        if (!riftFieldValid || !topCrmFieldValid || !bottomCrmFieldValid) {
            newFormIsValid = false
        }
    });
    return { formIsValid: newFormIsValid, fieldMaps: newFieldMaps }
}

function fieldMappingReducer({ formIsValid, fieldMaps }: FieldMappingState, action: FieldMappingAction): FieldMappingState {
    switch (action.type) {
        case "add": {
            return { formIsValid, fieldMaps: [...fieldMaps, initialFieldMap] };
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
    return useReducer(fieldMappingReducer, { fieldMaps: [initialFieldMap], formIsValid: false });
}