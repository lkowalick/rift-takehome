import { FieldMappingState } from "./use-field-mapping-reducer";

interface FieldMappingSubmissionData {
    riftField: string;
    topCrmField: string;
    bottomCrmField: string;
}

export default function prepareStateForSubmission({ fieldMaps }: FieldMappingState): FieldMappingSubmissionData[] {
    return fieldMaps.map(({ riftField, topCrmField, bottomCrmField }) => {
        return { riftField: riftField.value.id, topCrmField: topCrmField.value.id, bottomCrmField: bottomCrmField.value.id }
    }).filter(({ riftField, topCrmField, bottomCrmField }) => [riftField, topCrmField, bottomCrmField].every((value) => value !== ''));
}