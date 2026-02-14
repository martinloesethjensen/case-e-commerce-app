import { Currency, Money } from '@common/shared-models';

export const MoneyUtils = {
  zero(currency: Currency): Money {
    return {
      value: 0,
      currency: currency,
    };
  },

  toPrice(money: Money, locale: string): string {
    const amount = money.value / Math.pow(10, money.currency.decimals);

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: money.currency.code,
    }).format(amount);
  },

  add(a: Money, b: Money): Money {
    // TODO: ensure a and b has the same currency. If not, then throw error.
    return {
      value: a.value + b.value,
      currency: a.currency,
    };
  },

  subtract(a: Money, b: Money): Money {
    // TODO: ensure a and b has the same currency. If not, then throw error.
    return {
      value: a.value - b.value,
      currency: a.currency,
    };
  },

  multiply(money: Money, factor: number): Money {
    // TODO: ensure a and b has the same currency. If not, then throw error.
    // Write tests to ensure the result is correct and handle cases for decimal results.
    return {
      value: money.value * factor,
      currency: money.currency,
    };
  },
};
