import { AdCard } from '../app/components/AdsColumn';

export type InjectedItem<T> = 
  | { type: 'content'; data: T }
  | { type: 'ad'; data: AdCard; variant: 'news' | 'job' | 'event' | 'generic' };

function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function injectAds<T>(
  contentArray: T[],
  adsArray: AdCard[],
  variant: 'news' | 'job' | 'event' | 'generic',
  isMobile: boolean
): InjectedItem<T>[] {
  if (!isMobile || contentArray.length < 3 || !adsArray || adsArray.length === 0) {
    return contentArray.map(item => ({ type: 'content', data: item }));
  }

  const result: InjectedItem<T>[] = [];
  
  // Frequency logic
  // Desktop: after 3rd item, then every 6th
  // Mobile: after 3rd item, then every 8th
  const firstInsertPos = isMobile ? 2 : 2;
  const repeatInterval = isMobile ? 8 : 6;

  // Use a shuffled copy of ads to rotate them
  let availableAds = shuffleArray(adsArray);
  let adIndex = 0;

  for (let i = 0; i < contentArray.length; i++) {
    result.push({ type: 'content', data: contentArray[i] });

    // Check if we should insert an ad AFTER this item
    if (i === firstInsertPos || (i > firstInsertPos && (i - firstInsertPos) % repeatInterval === 0)) {
      // Refresh pool if we ran out
      if (adIndex >= availableAds.length) {
        availableAds = shuffleArray(adsArray);
        adIndex = 0;
      }

      result.push({
        type: 'ad',
        data: availableAds[adIndex],
        variant,
      });

      adIndex++;
    }
  }

  return result;
}
