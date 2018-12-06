// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import { AuthClient } from './auth/authClient';
import * as factory from './factory';
import * as transporters from './transporters';

import { AccountService } from './service/account';
import { IncomeService } from './service/income';
import { ScreeningWorkService} from './service/screeningWork';
import { TheaterService } from './service/theater';

export import factory = factory;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * 科目サービス
     */
    export class Account extends AccountService { }
    /**
     * 興行外収入サービス
     */
    export class Income extends IncomeService { }
    /**
     * 上映作品サービス
     */
    export class ScreeningWork extends ScreeningWorkService { }
    /**
     * 劇場サービス
     */
    export class Theater extends TheaterService { }
}
