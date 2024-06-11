/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Asset {
    @Property()
    public docType?: string;

    @Property()
    public ID: string;

    @Property()
    public GrainType: string;

    @Property()
    public Size: number;

    @Property()
    public Owner: string;

    @Property()
    public AppraisedValue: number;
  
    @Property()
    public Date: number;
}
