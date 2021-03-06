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

import { exists, mapValues } from '../runtime.ts';
import {
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionConditionFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionConditionToJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesToJSON,
} from './index.ts';

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus {
    /**
     * 
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus
     */
    acceptedNames: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames;
    /**
     * Conditions indicate state for particular aspects of a CustomResourceDefinition
     * @type {Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus
     */
    conditions: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition>;
    /**
     * StoredVersions are all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so the migration controller can first finish a migration to another version (i.e. that no old objects are left in the storage), and then remove the rest of the versions from this list. None of the versions in this list can be removed from the spec.Versions field.
     * @type {Array<string>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus
     */
    storedVersions: Array<string>;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatusFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus {
    return {
        'acceptedNames': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesFromJSON(json['acceptedNames']),
        'conditions': (json['conditions'] as Array<any>).map(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionConditionFromJSON),
        'storedVersions': json['storedVersions'],
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatusToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'acceptedNames': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesToJSON(value.acceptedNames),
        'conditions': (value.conditions as Array<any>).map(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionConditionToJSON),
        'storedVersions': value.storedVersions,
    };
}


