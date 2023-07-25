import mongoose from 'mongoose';

const cityWeatherSchema = mongoose.Schema(
  {
    LocalObservationDateTime: { type: Date },
    EpochTime: { type: Date },
    WeatherText: { type: String, default: '' },
    WeatherIcon: { type: Number },
    HasPrecipitation: { type: Boolean },
    PrecipitationType: { type: String },
    IsDayTime: { type: Boolean },
    Temperature: {
      Metric: {
        Value: { type: Number },
        Unit: { type: String },
        UnitType: { type: Number },
      },
      Imperial: {
        Value: { type: Number },
        Unit: { type: String },
        UnitType: { type: Number },
      },
    },
    MobileLink: { type: String },
    Link: { type: String },
  },
  {
    timestamps: true,
  }
);

const CityWeather = mongoose.model('CityWeather', cityWeatherSchema);

export default CityWeather;
