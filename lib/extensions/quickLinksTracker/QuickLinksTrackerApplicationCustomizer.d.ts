import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import '@pnp/sp/items';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/site-users/web';
export interface IQuickLinksTrackerApplicationCustomizerProperties {
}
export default class QuickLinksTrackerApplicationCustomizer extends BaseApplicationCustomizer<IQuickLinksTrackerApplicationCustomizerProperties> {
    onInit(): Promise<void>;
    private trackQuickLinks;
}
//# sourceMappingURL=QuickLinksTrackerApplicationCustomizer.d.ts.map