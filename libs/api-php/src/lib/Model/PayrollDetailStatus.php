<?php
/**
 * PayrollDetailStatus
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * FlowAccount Open API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.4.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;
use \OpenAPI\Client\ObjectSerializer;

/**
 * PayrollDetailStatus Class Doc Comment
 *
 * @category Class
 * @description 0 &#x3D; Draft 1 &#x3D; Awaiting 2 &#x3D; Reset 3 &#x3D; Paid 4 &#x3D; Partial 5 &#x3D; Rejected 7 &#x3D; Approved 11 &#x3D; PushPayAwaiting 13 &#x3D; PushPayProcessed 15 &#x3D; PushPayRejected 17 &#x3D; PushPayPartial 19 &#x3D; PushPayPendingPayments 50 &#x3D; KConnectAwaiting 52 &#x3D; KConnectProcessed 54 &#x3D; KConnectRejected 56 &#x3D; KConnectPendingPayments 58 &#x3D; KConnectPartialPayments
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PayrollDetailStatus
{
    /**
     * Possible values of this enum
     */
    const NUMBER_0 = 0;

    const NUMBER_1 = 1;

    const NUMBER_2 = 2;

    const NUMBER_3 = 3;

    const NUMBER_4 = 4;

    const NUMBER_5 = 5;

    const NUMBER_7 = 7;

    const NUMBER_11 = 11;

    const NUMBER_13 = 13;

    const NUMBER_15 = 15;

    const NUMBER_17 = 17;

    const NUMBER_19 = 19;

    const NUMBER_50 = 50;

    const NUMBER_52 = 52;

    const NUMBER_54 = 54;

    const NUMBER_56 = 56;

    const NUMBER_58 = 58;

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::NUMBER_0,
            self::NUMBER_1,
            self::NUMBER_2,
            self::NUMBER_3,
            self::NUMBER_4,
            self::NUMBER_5,
            self::NUMBER_7,
            self::NUMBER_11,
            self::NUMBER_13,
            self::NUMBER_15,
            self::NUMBER_17,
            self::NUMBER_19,
            self::NUMBER_50,
            self::NUMBER_52,
            self::NUMBER_54,
            self::NUMBER_56,
            self::NUMBER_58
        ];
    }
}


