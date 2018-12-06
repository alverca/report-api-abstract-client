import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 劇場サービス
 */
export class TheaterService extends Service {
    /**
     * 劇場取得
     */
    public async getTheaterList(
    ): Promise<factory.theater.attributes[]> {
        return this.fetch({
            uri: '/theater',
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
