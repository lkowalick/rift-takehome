import FieldSelector from "./field-selector";

const TopCrmFields = [
    {
        "id": "lead.IsDeleted",
        "label": "Lead Deleted"
    },
    {
        "id": "lead.LastName",
        "label": "Lead Last Name"
    },
    {
        "id": "lead.FirstName",
        "label": "Lead First Name"
    },
    {
        "id": "lead.Salutation",
        "label": "Lead Salutation"
    },
    {
        "id": "lead.Name",
        "label": "Lead Full Name"
    },
    {
        "id": "lead.Title",
        "label": "Lead Title"
    },
    {
        "id": "lead.Company",
        "label": "Lead Company"
    },
    {
        "id": "lead.Street",
        "label": "Lead Street"
    },
    {
        "id": "lead.City",
        "label": "Lead City"
    },
    {
        "id": "lead.State",
        "label": "Lead State/Province"
    },
    {
        "id": "lead.PostalCode",
        "label": "Lead Zip/Postal Code"
    },
    {
        "id": "lead.Country",
        "label": "Lead Country"
    },
    {
        "id": "lead.Latitude",
        "label": "Lead Latitude"
    },
    {
        "id": "lead.Longitude",
        "label": "Lead Longitude"
    },
    {
        "id": "lead.GeocodeAccuracy",
        "label": "Lead Geocode Accuracy"
    },
    {
        "id": "lead.Address",
        "label": "Lead Address"
    },
    {
        "id": "lead.Phone",
        "label": "Lead Phone"
    },
    {
        "id": "lead.MobilePhone",
        "label": "Lead Mobile Phone"
    },
    {
        "id": "lead.Email",
        "label": "Lead Email"
    },
    {
        "id": "lead.Website",
        "label": "Lead Website"
    },
    {
        "id": "lead.PhotoUrl",
        "label": "Lead Photo URL"
    },
    {
        "id": "lead.Description",
        "label": "Lead Description"
    },
    {
        "id": "lead.LeadSource",
        "label": "Lead Lead Source"
    },
    {
        "id": "lead.Status",
        "label": "Lead Status"
    },
    {
        "id": "lead.Industry",
        "label": "Lead Industry"
    },
    {
        "id": "lead.Rating",
        "label": "Lead Rating"
    },
    {
        "id": "lead.AnnualRevenue",
        "label": "Lead Annual Revenue"
    },
    {
        "id": "lead.NumberOfEmployees",
        "label": "Lead Employees"
    },
    {
        "id": "lead.IsConverted",
        "label": "Lead Converted"
    },
    {
        "id": "lead.ConvertedDate",
        "label": "Lead Converted Date"
    },
    {
        "id": "lead.IsUnreadByOwner",
        "label": "Lead Unread By Owner"
    },
    {
        "id": "lead.CreatedDate",
        "label": "Lead Created Date"
    },
    {
        "id": "lead.LastModifiedDate",
        "label": "Lead Last Modified Date"
    },
    {
        "id": "lead.SystemModstamp",
        "label": "Lead System Modstamp"
    },
    {
        "id": "lead.LastActivityDate",
        "label": "Lead Last Activity"
    },
    {
        "id": "lead.LastViewedDate",
        "label": "Lead Last Viewed Date"
    },
    {
        "id": "lead.LastReferencedDate",
        "label": "Lead Last Referenced Date"
    },
    {
        "id": "lead.Jigsaw",
        "label": "Lead Data.com Key"
    },
    {
        "id": "lead.EmailBouncedReason",
        "label": "Lead Email Bounced Reason"
    },
    {
        "id": "lead.EmailBouncedDate",
        "label": "Lead Email Bounced Date"
    }
]

export default function TopCrmFieldSelector({ className = '', value, onChange }: { className?: string, value: string, onChange: (value: string) => void }) {
    return <FieldSelector className={className} items={TopCrmFields} value={value} onChange={onChange} />;
}