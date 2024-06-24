/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Asset {
    @Property()
    public docType?: string;

    @Property()
    public id: string;

    @Property()
    public grainType: string;

    @Property()
    public size: number;

    @Property()
    public ownerId: string;
  
    @Property()
    public storageLocation: string;

    @Property()
    public date: string;
  
    @Property()
    public protein: number;
  
    @Property()
    public moisture: number;
  
    @Property()
    public harvestGrade: string;
}
