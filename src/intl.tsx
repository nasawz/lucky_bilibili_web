import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

export interface IntlProps {
  locale;
  translations;
}

class Intl extends React.Component<IntlProps, any> {
  public render() {
    let { locale, translations } = this.props;
    return (
      <IntlProvider locale={locale} key={locale} messages={translations}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

const mapState2Props = (state) => {
  return {
    locale: state.intl.locale,
    translations: state.intl.translations
  };
};

export default connect(mapState2Props)(Intl);
