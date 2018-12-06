import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 科目サービス
 */
export class AccountService extends Service {
    /**
     * 科目取得
     */
    public async getAccountList(
    ): Promise<factory.account.attributes[]> {
        return this.fetch({
            uri: '/account',
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
