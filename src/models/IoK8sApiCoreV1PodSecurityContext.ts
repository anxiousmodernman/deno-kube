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
    IoK8sApiCoreV1SELinuxOptions,
    IoK8sApiCoreV1SELinuxOptionsFromJSON,
    IoK8sApiCoreV1SELinuxOptionsToJSON,
    IoK8sApiCoreV1Sysctl,
    IoK8sApiCoreV1SysctlFromJSON,
    IoK8sApiCoreV1SysctlToJSON,
    IoK8sApiCoreV1WindowsSecurityContextOptions,
    IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON,
    IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON,
} from './index.ts';

/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 * @export
 * @interface IoK8sApiCoreV1PodSecurityContext
 */
export interface IoK8sApiCoreV1PodSecurityContext {
    /**
     * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume.
     * @type {number}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    fsGroup?: number;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
     * @type {number}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
     * @type {number}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    runAsUser?: number;
    /**
     * 
     * @type {IoK8sApiCoreV1SELinuxOptions}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
    /**
     * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID.  If unspecified, no groups will be added to any container.
     * @type {Array<number>}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    supplementalGroups?: Array<number>;
    /**
     * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
     * @type {Array<IoK8sApiCoreV1Sysctl>}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    sysctls?: Array<IoK8sApiCoreV1Sysctl>;
    /**
     * 
     * @type {IoK8sApiCoreV1WindowsSecurityContextOptions}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}

export function IoK8sApiCoreV1PodSecurityContextFromJSON(json: any): IoK8sApiCoreV1PodSecurityContext {
    return {
        'fsGroup': !exists(json, 'fsGroup') ? undefined : json['fsGroup'],
        'runAsGroup': !exists(json, 'runAsGroup') ? undefined : json['runAsGroup'],
        'runAsNonRoot': !exists(json, 'runAsNonRoot') ? undefined : json['runAsNonRoot'],
        'runAsUser': !exists(json, 'runAsUser') ? undefined : json['runAsUser'],
        'seLinuxOptions': !exists(json, 'seLinuxOptions') ? undefined : IoK8sApiCoreV1SELinuxOptionsFromJSON(json['seLinuxOptions']),
        'supplementalGroups': !exists(json, 'supplementalGroups') ? undefined : json['supplementalGroups'],
        'sysctls': !exists(json, 'sysctls') ? undefined : (json['sysctls'] as Array<any>).map(IoK8sApiCoreV1SysctlFromJSON),
        'windowsOptions': !exists(json, 'windowsOptions') ? undefined : IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON(json['windowsOptions']),
    };
}

export function IoK8sApiCoreV1PodSecurityContextToJSON(value?: IoK8sApiCoreV1PodSecurityContext): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'fsGroup': value.fsGroup,
        'runAsGroup': value.runAsGroup,
        'runAsNonRoot': value.runAsNonRoot,
        'runAsUser': value.runAsUser,
        'seLinuxOptions': IoK8sApiCoreV1SELinuxOptionsToJSON(value.seLinuxOptions),
        'supplementalGroups': value.supplementalGroups,
        'sysctls': value.sysctls === undefined ? undefined : (value.sysctls as Array<any>).map(IoK8sApiCoreV1SysctlToJSON),
        'windowsOptions': IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON(value.windowsOptions),
    };
}


