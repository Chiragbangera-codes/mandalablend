import React, { Component, ErrorInfo, ReactNode } from 'react';
import { FiRefreshCw, FiHome } from 'react-icons/fi';
import './ErrorBoundary.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorId: string;
}

/**
 * ErrorBoundary
 * ─────────────
 * Catches runtime and chunk-loading errors for every lazy-loaded page.
 *
 * Displays a branded error UI matching the Mandala Blend aesthetic.
 * Provides Retry (re-render) and Go Home (hard navigate) actions.
 * Never exposes raw React stack traces to the user.
 *
 * Must be a class component — React Error Boundaries cannot be function components.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorId: '',
    };
  }

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      // Generate a simple ID to help users reference the error when reporting
      errorId: `ERR-${Date.now().toString(36).toUpperCase()}`,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Log to console for debugging — never expose to user
    console.error('[ErrorBoundary] Caught error:', error, info.componentStack);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, errorId: '' });
  };

  handleGoHome = (): void => {
    window.location.href = '/';
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert" aria-live="assertive">
          <div className="error-boundary__card">
            {/* Mandala ornament */}
            <div className="error-boundary__ornament" aria-hidden="true">✦</div>

            {/* Heading */}
            <h1 className="error-boundary__title">Something went wrong</h1>

            {/* Message */}
            <p className="error-boundary__message">
              This page couldn't load. Please try refreshing or return to the home page.
            </p>

            {/* Error reference (non-technical) */}
            <p className="error-boundary__ref" aria-label={`Error reference: ${this.state.errorId}`}>
              Ref: {this.state.errorId}
            </p>

            {/* Actions */}
            <div className="error-boundary__actions">
              <button
                className="error-boundary__btn error-boundary__btn--primary"
                onClick={this.handleRetry}
                type="button"
              >
                <FiRefreshCw aria-hidden="true" />
                Retry
              </button>

              <button
                className="error-boundary__btn error-boundary__btn--secondary"
                onClick={this.handleGoHome}
                type="button"
              >
                <FiHome aria-hidden="true" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
