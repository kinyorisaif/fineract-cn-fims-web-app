/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Action} from '@ngrx/store';
import {type} from '../util';
import {Role} from '../../../services/identity/domain/role.model';
import {SearchResult} from '../../../common/store/search.reducer';

export const SEARCH = type('[Role] Search');
export const SEARCH_COMPLETE = type('[Role] Search Complete');

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor() { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: SearchResult) { }
}

export type Actions
  = SearchAction
  | SearchCompleteAction;