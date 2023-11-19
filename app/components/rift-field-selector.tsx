import FieldSelector from "./field-selector";

const riftFields = [
    {
    "id": "Email"
    ,
    "label": "Email"
    },
    {
    "id": "FirstName"
    ,
    "label": "First Name"
    },
    {
    "id": "LastName"
    ,
    "label": "Last Name"
    },
    {
    "id": "Company"
    ,
    "label": "Company"
    },
    {
    "id": "Title"
    ,
    "label": "Title"
    },
    {
    "id": "Phone"
    ,
    "label": "Phone"
    },
    {
    "id": "LinkedIn"
    ,
    "label": "LinkedIn"
    },
    {
    "id": "CampaignId"
    ,
    "label": "Campaign Id"
    },
    {
    "id": "CampaignName",
    "label": "Campaign Name"
    },
]
export default function RiftFieldSelector({ className = '' }) {
    return <FieldSelector className={className} items={riftFields}/>;
}