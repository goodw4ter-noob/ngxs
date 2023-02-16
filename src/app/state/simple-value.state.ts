import { State, StateToken, Action, StateContext, Selector } from '@ngxs/store'
import { SimpleValueModel } from './simple-value.model'
import { Injectable } from '@angular/core'
import { DecrementValue, IncrementValue, ResetValue, SetValue } from './simple-value.actions';

const SIMPLE_VALUE_STATE_TOKEN = new StateToken<SimpleValueModel>('SimpleValue');

@State<SimpleValueModel>({
  name: SIMPLE_VALUE_STATE_TOKEN,
  defaults: {
    value: 0,
  },
})
@Injectable()
export class SimpleValueState{
  @Action(IncrementValue)
  IncrementValue(ctx: StateContext<SimpleValueModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: state.value + 1,
    });
  }
  @Action(DecrementValue)
  DecrementValue(ctx: StateContext<SimpleValueModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: state.value - 1,
    });
  }
  @Action(ResetValue)
  ResetValue(ctx: StateContext<SimpleValueModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: 0,
    })
  }
  @Action(SetValue)
  SetValue(ctx: StateContext<SimpleValueModel>, action: SetValue) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: action.payload,
    })
  }
  @Selector()
  static value(state: SimpleValueModel) {
    return state.value;
  }
};
