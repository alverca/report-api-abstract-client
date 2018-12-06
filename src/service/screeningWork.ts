import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 上映作品サービス
 */
export class ScreeningWorkService extends Service {
    /**
     * 上映作品取得
     */
    public async getScreeningWorkList(
        params: factory.screeningWork.searchCondition
    ): Promise<factory.screeningWork.attributes[]> {
        return this.fetch({
            uri: '/screeningWork',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
