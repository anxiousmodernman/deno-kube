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
    IoK8sApiCoreV1EnvFromSource,
    IoK8sApiCoreV1EnvFromSourceFromJSON,
    IoK8sApiCoreV1EnvFromSourceToJSON,
    IoK8sApiCoreV1EnvVar,
    IoK8sApiCoreV1EnvVarFromJSON,
    IoK8sApiCoreV1EnvVarToJSON,
    IoK8sApiCoreV1Volume,
    IoK8sApiCoreV1VolumeFromJSON,
    IoK8sApiCoreV1VolumeToJSON,
    IoK8sApiCoreV1VolumeMount,
    IoK8sApiCoreV1VolumeMountFromJSON,
    IoK8sApiCoreV1VolumeMountToJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './index.ts';

/**
 * PodPresetSpec is a description of a pod preset.
 * @export
 * @interface IoK8sApiSettingsV1alpha1PodPresetSpec
 */
export interface IoK8sApiSettingsV1alpha1PodPresetSpec {
    /**
     * Env defines the collection of EnvVar to inject into containers.
     * @type {Array<IoK8sApiCoreV1EnvVar>}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetSpec
     */
    env?: Array<IoK8sApiCoreV1EnvVar>;
    /**
     * EnvFrom defines the collection of EnvFromSource to inject into containers.
     * @type {Array<IoK8sApiCoreV1EnvFromSource>}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetSpec
     */
    envFrom?: Array<IoK8sApiCoreV1EnvFromSource>;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetSpec
     */
    selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * VolumeMounts defines the collection of VolumeMount to inject into containers.
     * @type {Array<IoK8sApiCoreV1VolumeMount>}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetSpec
     */
    volumeMounts?: Array<IoK8sApiCoreV1VolumeMount>;
    /**
     * Volumes defines the collection of Volume to inject into the pod.
     * @type {Array<IoK8sApiCoreV1Volume>}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetSpec
     */
    volumes?: Array<IoK8sApiCoreV1Volume>;
}

export function IoK8sApiSettingsV1alpha1PodPresetSpecFromJSON(json: any): IoK8sApiSettingsV1alpha1PodPresetSpec {
    return {
        'env': !exists(json, 'env') ? undefined : (json['env'] as Array<any>).map(IoK8sApiCoreV1EnvVarFromJSON),
        'envFrom': !exists(json, 'envFrom') ? undefined : (json['envFrom'] as Array<any>).map(IoK8sApiCoreV1EnvFromSourceFromJSON),
        'selector': !exists(json, 'selector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'volumeMounts': !exists(json, 'volumeMounts') ? undefined : (json['volumeMounts'] as Array<any>).map(IoK8sApiCoreV1VolumeMountFromJSON),
        'volumes': !exists(json, 'volumes') ? undefined : (json['volumes'] as Array<any>).map(IoK8sApiCoreV1VolumeFromJSON),
    };
}

export function IoK8sApiSettingsV1alpha1PodPresetSpecToJSON(value?: IoK8sApiSettingsV1alpha1PodPresetSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'env': value.env === undefined ? undefined : (value.env as Array<any>).map(IoK8sApiCoreV1EnvVarToJSON),
        'envFrom': value.envFrom === undefined ? undefined : (value.envFrom as Array<any>).map(IoK8sApiCoreV1EnvFromSourceToJSON),
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'volumeMounts': value.volumeMounts === undefined ? undefined : (value.volumeMounts as Array<any>).map(IoK8sApiCoreV1VolumeMountToJSON),
        'volumes': value.volumes === undefined ? undefined : (value.volumes as Array<any>).map(IoK8sApiCoreV1VolumeToJSON),
    };
}


