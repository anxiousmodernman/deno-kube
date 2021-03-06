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
    IoK8sApiCoreV1ObjectReference,
    IoK8sApiCoreV1ObjectReferenceFromJSON,
    IoK8sApiCoreV1ObjectReferenceToJSON,
} from './index.ts';

/**
 * CronJobStatus represents the current state of a cron job.
 * @export
 * @interface IoK8sApiBatchV1beta1CronJobStatus
 */
export interface IoK8sApiBatchV1beta1CronJobStatus {
    /**
     * A list of pointers to currently running jobs.
     * @type {Array<IoK8sApiCoreV1ObjectReference>}
     * @memberof IoK8sApiBatchV1beta1CronJobStatus
     */
    active?: Array<IoK8sApiCoreV1ObjectReference>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiBatchV1beta1CronJobStatus
     */
    lastScheduleTime?: Date;
}

export function IoK8sApiBatchV1beta1CronJobStatusFromJSON(json: any): IoK8sApiBatchV1beta1CronJobStatus {
    return {
        'active': !exists(json, 'active') ? undefined : (json['active'] as Array<any>).map(IoK8sApiCoreV1ObjectReferenceFromJSON),
        'lastScheduleTime': !exists(json, 'lastScheduleTime') ? undefined : new Date(json['lastScheduleTime']),
    };
}

export function IoK8sApiBatchV1beta1CronJobStatusToJSON(value?: IoK8sApiBatchV1beta1CronJobStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'active': value.active === undefined ? undefined : (value.active as Array<any>).map(IoK8sApiCoreV1ObjectReferenceToJSON),
        'lastScheduleTime': value.lastScheduleTime === undefined ? undefined : value.lastScheduleTime.toISOString(),
    };
}


