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
import {
    IoK8sApiCoreV1ReplicationControllerSpec,
    IoK8sApiCoreV1ReplicationControllerSpecFromJSON,
    IoK8sApiCoreV1ReplicationControllerSpecToJSON,
    IoK8sApiCoreV1ReplicationControllerStatus,
    IoK8sApiCoreV1ReplicationControllerStatusFromJSON,
    IoK8sApiCoreV1ReplicationControllerStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ReplicationController represents the configuration of a replication controller.
 * @export
 * @interface IoK8sApiCoreV1ReplicationController
 */
export interface IoK8sApiCoreV1ReplicationController {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationController
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationController
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1ReplicationController
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1ReplicationControllerSpec}
     * @memberof IoK8sApiCoreV1ReplicationController
     */
    spec?: IoK8sApiCoreV1ReplicationControllerSpec;
    /**
     * 
     * @type {IoK8sApiCoreV1ReplicationControllerStatus}
     * @memberof IoK8sApiCoreV1ReplicationController
     */
    status?: IoK8sApiCoreV1ReplicationControllerStatus;
}

export function IoK8sApiCoreV1ReplicationControllerFromJSON(json: any): IoK8sApiCoreV1ReplicationController {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1ReplicationControllerSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCoreV1ReplicationControllerStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCoreV1ReplicationControllerToJSON(value?: IoK8sApiCoreV1ReplicationController): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoreV1ReplicationControllerSpecToJSON(value.spec),
        'status': IoK8sApiCoreV1ReplicationControllerStatusToJSON(value.status),
    };
}

