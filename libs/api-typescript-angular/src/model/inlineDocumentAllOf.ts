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
import { InlineProductItem } from './inlineProductItem';


export interface InlineDocumentAllOf { 
    discountType?: number;
    useInlineDiscount?: boolean;
    useInlineVat?: boolean;
    exemptAmount?: number | null;
    vatableAmount?: number | null;
    items?: Array<InlineProductItem> | null;
    documentReference?: Array<UpgradeDocument> | null;
}

