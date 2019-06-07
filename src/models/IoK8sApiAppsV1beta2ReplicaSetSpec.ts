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
    IoK8sApiCoreV1PodTemplateSpec,
    IoK8sApiCoreV1PodTemplateSpecFromJSON,
    IoK8sApiCoreV1PodTemplateSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 * @export
 * @interface IoK8sApiAppsV1beta2ReplicaSetSpec
 */
export interface IoK8sApiAppsV1beta2ReplicaSetSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetSpec
     */
    minReadySeconds?: number;
    /**
     * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetSpec
     */
    replicas?: number;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetSpec
     */
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {IoK8sApiCoreV1PodTemplateSpec}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetSpec
     */
    template?: IoK8sApiCoreV1PodTemplateSpec;
}

export function IoK8sApiAppsV1beta2ReplicaSetSpecFromJSON(json: any): IoK8sApiAppsV1beta2ReplicaSetSpec {
    return {
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'template': !exists(json, 'template') ? undefined : IoK8sApiCoreV1PodTemplateSpecFromJSON(json['template']),
    };
}

export function IoK8sApiAppsV1beta2ReplicaSetSpecToJSON(value?: IoK8sApiAppsV1beta2ReplicaSetSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'minReadySeconds': value.minReadySeconds,
        'replicas': value.replicas,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'template': IoK8sApiCoreV1PodTemplateSpecToJSON(value.template),
    };
}

