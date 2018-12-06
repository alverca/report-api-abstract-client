import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 興行外収入サービス
 */
export class IncomeService extends Service {
    /**
     * 興行外収入検索
     */
    public async searchIncome(
        params: Partial<factory.income.attributes>
    ): Promise<factory.income.attributes[]> {
        return this.fetch({
            uri: '/income',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 興行外収入データを保存する
     */
    public async saveIncomes(
        params: factory.income.attributes[]
    ): Promise<void> {
        return this.fetch({
            uri: '/income',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
