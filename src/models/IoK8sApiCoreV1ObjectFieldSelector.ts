// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 * @export
 * @interface IoK8sApiCoreV1ObjectFieldSelector
 */
export interface IoK8sApiCoreV1ObjectFieldSelector {
    /**
     * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
     * @type {string}
     * @memberof IoK8sApiCoreV1ObjectFieldSelector
     */
    apiVersion?: string;
    /**
     * Path of the field to select in the specified API version.
     * @type {string}
     * @memberof IoK8sApiCoreV1ObjectFieldSelector
     */
    fieldPath: string;
}

export function IoK8sApiCoreV1ObjectFieldSelectorFromJSON(json: any): IoK8sApiCoreV1ObjectFieldSelector {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'fieldPath': json['fieldPath'],
    };
}

export function IoK8sApiCoreV1ObjectFieldSelectorToJSON(value?: IoK8sApiCoreV1ObjectFieldSelector): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'fieldPath': value.fieldPath,
    };
}

