export const clerkAppearance = {
  elements: {
    modalBackdrop: 'bg-stone-950/45 backdrop-blur-sm',
    cardBox: 'shadow-none',
    card: [
      'paper-panel',
      'w-full',
      'rounded-[28px]',
      'border',
      'border-stone-700/25',
      'bg-[linear-gradient(180deg,rgba(255,249,231,0.96),rgba(233,211,162,0.96))]',
      'px-6',
      'py-6',
      'shadow-[0_18px_45px_rgba(42,22,8,0.22)]',
    ].join(' '),
    headerTitle:
      'font-display text-3xl font-bold uppercase tracking-[0.08em] text-stone-900',
    headerSubtitle: 'text-base leading-relaxed text-stone-700',
    socialButtonsBlockButton:
      'min-h-12 rounded-2xl border border-stone-400/35 !bg-white px-4 shadow-[0_4px_14px_rgba(60,40,20,0.08)] hover:!bg-stone-50',
    socialButtonsBlockButtonText:
      'text-sm font-medium tracking-[0.01em] text-stone-700',
    socialButtonsProviderIcon:
      'rounded-2xl border border-stone-400/35 !bg-white shadow-[0_4px_14px_rgba(60,40,20,0.08)]',
    socialButtonsIconButton:
      'rounded-2xl border border-stone-400/35 !bg-white shadow-[0_4px_14px_rgba(60,40,20,0.08)] hover:!bg-stone-50',
    dividerLine: 'bg-amber-900/20',
    dividerText:
      'font-display bg-transparent text-xs uppercase tracking-[0.2em] text-stone-600',
    formFieldLabel:
      'font-display text-xs font-semibold uppercase tracking-[0.16em] text-stone-700',
    formFieldInput:
      'rounded-2xl border border-stone-400/35 !bg-white text-stone-900 shadow-[0_4px_14px_rgba(60,40,20,0.08)] focus:border-red-800/40 focus:ring-0',
    formButtonPrimary:
      'ink-button ink-button-primary h-auto border-0 px-5 py-3 text-xs shadow-[0_10px_18px_rgba(95,28,23,0.25)]',
    footerActionText: 'text-sm text-stone-700',
    footerActionLink:
      'font-display text-sm uppercase tracking-[0.12em] text-red-800 hover:text-red-900',
    identityPreviewText: 'text-stone-600',
    identityPreviewEditButton:
      'font-display text-xs uppercase tracking-[0.12em] text-red-800',
    formResendCodeLink:
      'font-display text-xs uppercase tracking-[0.12em] text-red-800',
    otpCodeFieldInput:
      'rounded-2xl border border-amber-900/25 bg-amber-50/70 text-stone-900 shadow-none',
    alertText: 'text-stone-700',
    alertClerkError: 'border-red-900/20 bg-red-50/70 text-red-900',
    formFieldSuccessText: 'text-green-800',
    formFieldWarningText: 'text-amber-800',
    alternativeMethodsBlockButton:
      'rounded-full border border-amber-900/25 bg-amber-50/50 font-display text-xs uppercase tracking-[0.12em] text-stone-700',
  },
};
