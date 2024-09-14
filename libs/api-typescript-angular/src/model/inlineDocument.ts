/**
 * FlowAccount Business API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UpgradeDocument } from './upgradeDocument';
import { InlineDocumentAllOf } from './inlineDocumentAllOf';
import { Document } from './document';
import { InlineProductItem } from './inlineProductItem';


export interface InlineDocument { 
    recordId?: number;
    contactCode?: string | null;
    contactName?: string | null;
    contactAddress?: string | null;
    contactTaxId?: string | null;
    contactBranch?: string | null;
    contactPerson?: string | null;
    contactEmail?: string | null;
    contactNumber?: string | null;
    contactZipCode?: string | null;
    contactGroup?: number;
    publishedOn?: string;
    creditType?: number;
    creditDays?: number;
    dueDate?: string;
    salesName?: string | null;
    projectName?: string | null;
    reference?: string | null;
    isVatInclusive?: boolean;
    useReceiptDeduction?: boolean;
    subTotal?: number;
    discountPercentage?: number;
    discountAmount?: number;
    totalAfterDiscount?: number;
    isVat?: boolean;
    vatAmount?: number;
    grandTotal?: number;
    documentShowWithholdingTax?: boolean;
    documentWithholdingTaxPercentage?: number;
    documentWithholdingTaxAmount?: number;
    documentDeductionType?: number;
    documentDeductionAmount?: number;
    remarks?: string | null;
    internalNotes?: string | null;
    showSignatureOrStamp?: boolean;
    documentStructureType?: string | null;
    discountType?: number;
    useInlineDiscount?: boolean;
    useInlineVat?: boolean;
    exemptAmount?: number | null;
    vatableAmount?: number | null;
    items?: Array<InlineProductItem> | null;
    documentReference?: Array<UpgradeDocument> | null;
}

