import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { sp } from '@pnp/sp/presets/all';
import '@pnp/sp/items';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/site-users/web';

export interface IQuickLinksTrackerApplicationCustomizerProperties {}

export default class QuickLinksTrackerApplicationCustomizer
  extends BaseApplicationCustomizer<IQuickLinksTrackerApplicationCustomizerProperties> {

  @override
  public async onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context as any
    });

    this.trackQuickLinks();

    return Promise.resolve();
  }

  private trackQuickLinks(): void {
    document.body.addEventListener('click', async (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target && target.hasAttribute('data-automation-id') && target.getAttribute('data-automation-id') === 'quick-links-item-title') {
        const linkTitle = target.innerText.trim();
        const linkElement = target.closest('a') as HTMLAnchorElement;
        const linkUrl = linkElement?.href || 'No URL';

        try {
          const user = await sp.web.currentUser();
          await sp.web.lists.getByTitle('ClickAnalytics').items.add({
            Title: linkTitle,
            LinkUrl: linkUrl,
            ClickedTime: new Date().toISOString(),
            User: user.Title
          });
        } catch (error) {
          console.error("Error logging click event:", error);
        }
      }
    });
  }
}