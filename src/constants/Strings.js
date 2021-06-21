const Strings = {
  pricing: 'Pricing',
  saveExit: 'Save & Exit',
  headerSubtitle:
    'Enter the price that you want to charge for renting out your car .',
  labels: {
    regularPrice: 'Regular Price (Daily) *',
    peakPrice: 'Peak Price (Daily) *',
    longTerRentalLabel: 'Long Term Rental Price (Monthly)*',
  },
  regularPriceInfo:
    'Our pricing algorithm recommends price between $55 - 70 to maximise demand basis your car type and location',
  peakPriceInfo:
    'Peak price allow you to charge extra for weekends or holidays. Recommended peak price for your car is between $75-90.',
  peakPriceDays: 'Peak Price Days',
  peakPriceOnHolidays: 'Set peak price on public holidays',
  autoApplyPeakPrice: 'Automatically apply peak prices on public holidays.',
  longTermRental: 'Long Term Rental',
  longTermInfo:
    'Allow guests to book your car for long term, ie greater than 2 months.',
  next: 'Next',
  weekDays: [
    {
      id: '1',
      value: 'Monday',
      showText: 'M',
      isSelected: false,
    },
    {
      id: '2',
      value: 'Tuesday',
      showText: 'T',
      isSelected: false,
    },
    {
      id: '3',
      value: 'Wednesday',
      showText: 'W',
      isSelected: false,
    },
    {
      id: '4',
      value: 'Thursday',
      showText: 'T',
      isSelected: false,
    },
    {
      id: '5',
      value: 'Friday',
      showText: 'F',
      isSelected: false,
    },
    {
      id: '6',
      value: 'Saturday',
      showText: 'S',
      isSelected: false,
    },
    {
      id: '7',
      value: 'Sunday',
      showText: 'S',
      isSelected: false,
    },
  ],
  demands: {
    good: {
      value: 'Good Demand',
      details:
        ': Based on your settings you are on your way to attract good level of demand.',
    },
    average: {
      value: 'Average Demand',
      details:
        ': Based on your settings you are on your way to attract average level of demand.',
    },
    low: {
      value: 'Low Demand',
      details:
        ': Based on your settings you are on your way to attract low level of demand.',
    },
  },
};

export default Strings;
