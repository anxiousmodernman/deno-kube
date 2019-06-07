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
    IoK8sApiAppsV1beta1RollingUpdateDeployment,
    IoK8sApiAppsV1beta1RollingUpdateDeploymentFromJSON,
    IoK8sApiAppsV1beta1RollingUpdateDeploymentToJSON,
} from './';

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 * @export
 * @interface IoK8sApiAppsV1beta1DeploymentStrategy
 */
export interface IoK8sApiAppsV1beta1DeploymentStrategy {
    /**
     * 
     * @type {IoK8sApiAppsV1beta1RollingUpdateDeployment}
     * @memberof IoK8sApiAppsV1beta1DeploymentStrategy
     */
    rollingUpdate?: IoK8sApiAppsV1beta1RollingUpdateDeployment;
    /**
     * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1DeploymentStrategy
     */
    type?: string;
}

export function IoK8sApiAppsV1beta1DeploymentStrategyFromJSON(json: any): IoK8sApiAppsV1beta1DeploymentStrategy {
    return {
        'rollingUpdate': !exists(json, 'rollingUpdate') ? undefined : IoK8sApiAppsV1beta1RollingUpdateDeploymentFromJSON(json['rollingUpdate']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiAppsV1beta1DeploymentStrategyToJSON(value?: IoK8sApiAppsV1beta1DeploymentStrategy): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'rollingUpdate': IoK8sApiAppsV1beta1RollingUpdateDeploymentToJSON(value.rollingUpdate),
        'type': value.type,
    };
}

