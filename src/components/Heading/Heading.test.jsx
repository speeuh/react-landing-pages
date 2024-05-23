import { screen } from '@testing-library/react';
import Heading from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Test' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.large,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading fontLight={true}>Test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Test' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Test' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Test</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="large">Test</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Test</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  // it('should render correct font-size when using mobile', () => {
  //   renderTheme(<Heading size="huge">Test</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'Test' });

  //   expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
  //     media: theme.media.lteMedium,
  //   });
  // });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>Test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Test' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Test</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
