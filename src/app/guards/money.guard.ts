import { CanActivateFn } from '@angular/router';

export const moneyGuard: CanActivateFn = () => {
  return window.confirm('Do you have money?');
};
