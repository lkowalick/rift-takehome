import FieldSelector from "./field-selector";

const bottomCrmFields = [
    {
        "id": "contact.IsDeleted",
        "label": "Contact Deleted"
    },
    {
        "id": "contact.LastName",
        "label": "Contact Last Name"
    },
    {
        "id": "contact.FirstName",
        "label": "Contact First Name"
    },
    {
        "id": "contact.Salutation",
        "label": "Contact Salutation"
    },
    {
        "id": "contact.Name",
        "label": "Contact Full Name"
    },
    {
        "id": "contact.OtherStreet",
        "label": "Contact Other Street"
    },
    {
        "id": "contact.OtherCity",
        "label": "Contact Other City"
    },
    {
        "id": "contact.OtherState",
        "label": "Contact Other State/Province"
    },
    {
        "id": "contact.OtherPostalCode",
        "label": "Contact Other Zip/Postal Code"
    },
    {
        "id": "contact.OtherCountry",
        "label": "Contact Other Country"
    },
    {
        "id": "contact.OtherLatitude",
        "label": "Contact Other Latitude"
    },
    {
        "id": "contact.OtherLongitude",
        "label": "Contact Other Longitude"
    },
    {
        "id": "contact.OtherGeocodeAccuracy",
        "label": "Contact Other Geocode Accuracy"
    },
    {
        "id": "contact.OtherAddress",
        "label": "Contact Other Address"
    },
    {
        "id": "contact.MailingStreet",
        "label": "Contact Mailing Street"
    },
    {
        "id": "contact.MailingCity",
        "label": "Contact Mailing City"
    },
    {
        "id": "contact.MailingState",
        "label": "Contact Mailing State/Province"
    },
    {
        "id": "contact.MailingPostalCode",
        "label": "Contact Mailing Zip/Postal Code"
    },
    {
        "id": "contact.MailingCountry",
        "label": "Contact Mailing Country"
    },
    {
        "id": "contact.MailingLatitude",
        "label": "Contact Mailing Latitude"
    },
    {
        "id": "contact.MailingLongitude",
        "label": "Contact Mailing Longitude"
    },
    {
        "id": "contact.MailingGeocodeAccuracy",
        "label": "Contact Mailing Geocode Accuracy"
    },
    {
        "id": "contact.MailingAddress",
        "label": "Contact Mailing Address"
    },
    {
        "id": "contact.Phone",
        "label": "Contact Business Phone"
    },
    {
        "id": "contact.Fax",
        "label": "Contact Business Fax"
    },
    {
        "id": "contact.MobilePhone",
        "label": "Contact Mobile Phone"
    },
    {
        "id": "contact.HomePhone",
        "label": "Contact Home Phone"
    },
    {
        "id": "contact.OtherPhone",
        "label": "Contact Other Phone"
    },
    {
        "id": "contact.AssistantPhone",
        "label": "Contact Asst. Phone"
    },
    {
        "id": "contact.Email",
        "label": "Contact Email"
    },
    {
        "id": "contact.Title",
        "label": "Contact Title"
    },
    {
        "id": "contact.Department",
        "label": "Contact Department"
    },
    {
        "id": "contact.AssistantName",
        "label": "Contact Assistant's Name"
    },
    {
        "id": "contact.LeadSource",
        "label": "Contact Lead Source"
    },
    {
        "id": "contact.Birthdate",
        "label": "Contact Birthdate"
    },
    {
        "id": "contact.Description",
        "label": "Contact Contact Description"
    },
    {
        "id": "contact.CreatedDate",
        "label": "Contact Created Date"
    },
    {
        "id": "contact.LastModifiedDate",
        "label": "Contact Last Modified Date"
    },
    {
        "id": "contact.SystemModstamp",
        "label": "Contact System Modstamp"
    },
    {
        "id": "contact.LastActivityDate",
        "label": "Contact Last Activity"
    },
    {
        "id": "contact.LastCURequestDate",
        "label": "Contact Last Stay-in-Touch Request Date"
    },
    {
        "id": "contact.LastCUUpdateDate",
        "label": "Contact Last Stay-in-Touch Save Date"
    },
    {
        "id": "contact.LastViewedDate",
        "label": "Contact Last Viewed Date"
    },
    {
        "id": "contact.LastReferencedDate",
        "label": "Contact Last Referenced Date"
    },
    {
        "id": "contact.EmailBouncedReason",
        "label": "Contact Email Bounced Reason"
    },
    {
        "id": "contact.EmailBouncedDate",
        "label": "Contact Email Bounced Date"
    },
    {
        "id": "contact.IsEmailBounced",
        "label": "Contact Is Email Bounced"
    },
    {
        "id": "contact.PhotoUrl",
        "label": "Contact Photo URL"
    },
    {
        "id": "contact.Jigsaw",
        "label": "Contact Data.com Key"
    },
    {
        "id": "account.IsDeleted",
        "label": "Account Deleted"
    },
    {
        "id": "account.Name",
        "label": "Account Account Name"
    },
    {
        "id": "account.Type",
        "label": "Account Account Type"
    },
    {
        "id": "account.BillingStreet",
        "label": "Account Billing Street"
    },
    {
        "id": "account.BillingCity",
        "label": "Account Billing City"
    },
    {
        "id": "account.BillingState",
        "label": "Account Billing State/Province"
    },
    {
        "id": "account.BillingPostalCode",
        "label": "Account Billing Zip/Postal Code"
    },
    {
        "id": "account.BillingCountry",
        "label": "Account Billing Country"
    },
    {
        "id": "account.BillingLatitude",
        "label": "Account Billing Latitude"
    },
    {
        "id": "account.BillingLongitude",
        "label": "Account Billing Longitude"
    },
    {
        "id": "account.BillingGeocodeAccuracy",
        "label": "Account Billing Geocode Accuracy"
    },
    {
        "id": "account.BillingAddress",
        "label": "Account Billing Address"
    },
    {
        "id": "account.ShippingStreet",
        "label": "Account Shipping Street"
    },
    {
        "id": "account.ShippingCity",
        "label": "Account Shipping City"
    },
    {
        "id": "account.ShippingState",
        "label": "Account Shipping State/Province"
    },
    {
        "id": "account.ShippingPostalCode",
        "label": "Account Shipping Zip/Postal Code"
    },
    {
        "id": "account.ShippingCountry",
        "label": "Account Shipping Country"
    },
    {
        "id": "account.ShippingLatitude",
        "label": "Account Shipping Latitude"
    },
    {
        "id": "account.ShippingLongitude",
        "label": "Account Shipping Longitude"
    },
    {
        "id": "account.ShippingGeocodeAccuracy",
        "label": "Account Shipping Geocode Accuracy"
    },
    {
        "id": "account.ShippingAddress",
        "label": "Account Shipping Address"
    },
    {
        "id": "account.Phone",
        "label": "Account Account Phone"
    },
    {
        "id": "account.Fax",
        "label": "Account Account Fax"
    },
    {
        "id": "account.Website",
        "label": "Account Website"
    },
    {
        "id": "account.PhotoUrl",
        "label": "Account Photo URL"
    },
    {
        "id": "account.Industry",
        "label": "Account Industry"
    },
    {
        "id": "account.AnnualRevenue",
        "label": "Account Annual Revenue"
    },
    {
        "id": "account.NumberOfEmployees",
        "label": "Account Employees"
    },
    {
        "id": "account.Description",
        "label": "Account Account Description"
    },
    {
        "id": "account.CreatedDate",
        "label": "Account Created Date"
    },
    {
        "id": "account.LastModifiedDate",
        "label": "Account Last Modified Date"
    },
    {
        "id": "account.SystemModstamp",
        "label": "Account System Modstamp"
    },
    {
        "id": "account.LastActivityDate",
        "label": "Account Last Activity"
    },
    {
        "id": "account.LastViewedDate",
        "label": "Account Last Viewed Date"
    },
    {
        "id": "account.LastReferencedDate",
        "label": "Account Last Referenced Date"
    },
    {
        "id": "account.Jigsaw",
        "label": "Account Data.com Key"
    },
    {
        "id": "account.AccountSource",
        "label": "Account Account Source"
    },
    {
        "id": "account.SicDesc",
        "label": "Account SIC Description"
    }
]

export default function BottomCrmFieldSelector({ className = '' }) {
    return <FieldSelector className={className} items={bottomCrmFields} />;
}