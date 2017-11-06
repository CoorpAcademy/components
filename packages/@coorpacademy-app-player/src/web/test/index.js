import test from 'ava';
import puppeteer from 'puppeteer';
import createEngine from '../scenario/engine';
import {runInsidePage} from '../scenario/helper';
import failureScenario from '../scenario/microlearning/failure';

const MICROLEARNING_URL = 'http://localhost:8080';

test('should fail', runInsidePage(failureScenario, MICROLEARNING_URL));
