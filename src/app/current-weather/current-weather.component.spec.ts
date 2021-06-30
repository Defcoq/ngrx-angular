import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { injectSpy } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { WeatherService } from '../Services/weather/weather.service'
import { WeatherServiceFake } from '../Services/weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  let weatherServiceMock: jasmine.SpyObj<WeatherService>
  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCurrentWeather',
    ])

    await TestBed.configureTestingModule({
      imports: [],
      declarations: [CurrentWeatherComponent],
      providers: [
        {
          provide: WeatherService,
          useClass: weatherServiceSpy,
        },
      ],
    }).compileComponents()
    weatherServiceMock = injectSpy(WeatherService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())
    // Act
    fixture.detectChanges() // triggers ngOnInit
    // Assert
    expect(component).toBeTruthy()
  })
})
