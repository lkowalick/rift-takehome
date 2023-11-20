import { FieldMap } from "./constants";

interface FieldMappingSubmissionData {
    riftField: string;
    topCrmField: string;
    bottomCrmField: string;
}

export default function prepareStateForSubmission(fieldMaps: FieldMap[]): FieldMappingSubmissionData[] {
    return fieldMaps.map(({ riftField, topCrmField, bottomCrmField }) => {
        return {
            riftField: riftField.value.id,
            topCrmField: topCrmField.value.id,
            bottomCrmField: bottomCrmField.value.id
        }
    }).filter(({ riftField, topCrmField, bottomCrmField }) => {
        return [riftField, topCrmField, bottomCrmField].every((value) => value !== '')
    });
}
