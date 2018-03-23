import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    divideView: {
      backgroundColor: Colors.appBlueColor,
      height: 1
    },
    centerElementsContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    regularBoldText: {
      fontSize: Fonts.size.regular,
      fontWeight: 'bold'
    },
    applyBottomDividerToView: {
      borderBottomWidth: 0.6,
      borderBottomColor: Colors.zambezi
    },
    imageIconsTiny: {
      width: Metrics.icons.small,
      height: Metrics.icons.small,
      marginRight: 6,
      marginLeft: 6
    },
    imageIconsMedium: {
      width: Metrics.icons.medium,
      height: Metrics.icons.medium,
      marginRight: 5,
      marginLeft: 5
    },
    textInputs: {
      fontSize: Fonts.size.regular,
      fontWeight: 'bold',
      width: Metrics.screenWidth - 100,
      height: 40,
      color: Colors.appBlueColor
    },
    eachForm: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 5
    },
    baseTextTitle: {
      fontSize: Fonts.size.h6,
      fontWeight: '600',
    },
    formCompLabel: {
      ...Fonts.style.formLabel,
      color: Colors.appGrayColor,
      marginBottom: 5
    },
    buttonBase: {
      borderWidth: 1,
      borderColor: Colors.appGrayColor,
      borderRadius: 5,
      width: Metrics.screenWidth - 100,
      backgroundColor: Colors.transparent,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  },
  imageIconsSmall: {
    width: Metrics.icons.small,
    height: Metrics.icons.small
  },
};

export default ApplicationStyles;
