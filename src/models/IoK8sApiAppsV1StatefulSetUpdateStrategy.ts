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
    IoK8sApiAppsV1RollingUpdateStatefulSetStrategy,
    IoK8sApiAppsV1RollingUpdateStatefulSetStrategyFromJSON,
    IoK8sApiAppsV1RollingUpdateStatefulSetStrategyToJSON,
} from './index.ts';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 * @export
 * @interface IoK8sApiAppsV1StatefulSetUpdateStrategy
 */
export interface IoK8sApiAppsV1StatefulSetUpdateStrategy {
    /**
     * 
     * @type {IoK8sApiAppsV1RollingUpdateStatefulSetStrategy}
     * @memberof IoK8sApiAppsV1StatefulSetUpdateStrategy
     */
    rollingUpdate?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
    /**
     * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetUpdateStrategy
     */
    type?: string;
}

export function IoK8sApiAppsV1StatefulSetUpdateStrategyFromJSON(json: any): IoK8sApiAppsV1StatefulSetUpdateStrategy {
    return {
        'rollingUpdate': !exists(json, 'rollingUpdate') ? undefined : IoK8sApiAppsV1RollingUpdateStatefulSetStrategyFromJSON(json['rollingUpdate']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiAppsV1StatefulSetUpdateStrategyToJSON(value?: IoK8sApiAppsV1StatefulSetUpdateStrategy): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'rollingUpdate': IoK8sApiAppsV1RollingUpdateStatefulSetStrategyToJSON(value.rollingUpdate),
        'type': value.type,
    };
}


