
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Project {
    name?: Nullable<string>;
}

export interface Equipment {
    id?: Nullable<number>;
    name?: Nullable<string>;
    manufacturerId?: Nullable<number>;
    kwh?: Nullable<number>;
    cout?: Nullable<number>;
}

export interface IQuery {
    project(): Nullable<Project> | Promise<Nullable<Project>>;
    equipment(): Nullable<Equipment> | Promise<Nullable<Equipment>>;
}

type Nullable<T> = T | null;
