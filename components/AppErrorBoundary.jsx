'use client';

import { Component } from 'react';

export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Application rendering error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-sky-50 px-6">
          <section className="w-full max-w-lg rounded-3xl border border-border bg-white p-8 text-center shadow-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl font-extrabold text-sky-600">
              S
            </div>
            <h1 className="mt-6 text-2xl font-extrabold text-navy">We’re refreshing the page</h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-light">
              Something interrupted the page while it was loading. Refresh once to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary mt-6"
            >
              Refresh page
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
