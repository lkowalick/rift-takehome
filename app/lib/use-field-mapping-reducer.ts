import { useReducer } from "react"
import { FieldMap, NullField } from "./constants"

const initialFieldMap = { riftField: NullField, topCrmField: NullField, bottomCrmField: NullField }

type State = { fieldMaps: FieldMap[], valid: boolean };

type FieldMappingAction =
    | { type: "add" }
    | { type: "update", index: number, value: FieldMap }
    | { type: "delete", index: number }
    | { type: "validate" }

function validate(fieldMaps: FieldMap[]): State {
    const newFieldMaps = [...fieldMaps];
    fieldMaps.forEach((fieldMapA, i) => {
        const { riftField, bottomCrmField, topCrmField } = fieldMapA;
        const riftFieldValid = !fieldMaps.some((fieldMapB, j) => i !== j && fieldMapA.riftField.value.id === fieldMapB.riftField.value.id)
        const topCrmFieldValid = !fieldMaps.some((fieldMapB, j) => i !== j && fieldMapA.topCrmField.value.id === fieldMapB.topCrmField.value.id)
        const bottomCrmFieldValid = !fieldMaps.some((fieldMapB, j) => i !== j && fieldMapA.bottomCrmField.value.id === fieldMapB.bottomCrmField.value.id)
        newFieldMaps[i] = {
            riftField: { value: riftField.value, valid: riftFieldValid },
            topCrmField: { value: topCrmField.value, valid: topCrmFieldValid },
            bottomCrmField: { value: bottomCrmField.value, valid: bottomCrmFieldValid },
        }
    });
    const newValid = fieldMaps.some(({ riftField, topCrmField, bottomCrmField }) => riftField.value.id !== '' && topCrmField.value.id !== '' && bottomCrmField.value.id !== '') && newFieldMaps.every(({ riftField, topCrmField, bottomCrmField }) => riftField.valid && topCrmField.valid && bottomCrmField.valid);
    return { valid: newValid, fieldMaps: newFieldMaps}
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