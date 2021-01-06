import { useState } from 'react';

export enum Status {
  SETUP,
  LOADING,
  PRESENT,
}

function unhook(hook: any[]) {
  const [setup, loading, present] = hook;
  return { setup, loading, present };
}

export function useStatus(initial = Status.SETUP) {
  const [status, setStatus] = useState<Status>(initial);

  return {
    render: unhook(useStatusConditionalRenders(status)),
    goTo: unhook(useStatusUpdates(setStatus)),
    checkIf: unhook(useStatusChecks(status)),
  };
}

function useStatusUpdates(set: (status: Status) => void): (() => void)[] {
  const toSetup = () => set(Status.SETUP);
  const toLoading = () => set(Status.LOADING);
  const toPresent = () => set(Status.PRESENT);
  return [toSetup, toLoading, toPresent];
}

function useStatusChecks(status: Status) {
  const isInSetup = () => status === Status.SETUP;
  const isInLoading = () => status === Status.LOADING;
  const isInPresent = () => status === Status.PRESENT;
  return [isInSetup, isInLoading, isInPresent];
}

function useStatusConditionalRenders(status: Status) {
  const [isInSetup, isInLoading, isInPresent] = useStatusChecks(status);

  const renderIf = (condition: Boolean) => (element: JSX.Element) =>
    condition ? element : undefined;

  const renderIfSetup = renderIf(isInSetup());
  const renderIfLoading = renderIf(isInLoading());
  const renderIfPresent = renderIf(isInPresent());

  return [renderIfSetup, renderIfLoading, renderIfPresent];
}
