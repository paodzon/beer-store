interface Login {
  email: string,
  password: string
}

interface SignUp {
  email: string,
  password: string,
  confirmPassword: string 
}

interface Action {
  type: string,
  payload: any
}

interface CartItem {
  id: number,
  name: string,
  quantity: number,
  product_id: number,
  user_id: string,
  image_url: string | null
}

interface Beer {
  id: number,
  name: string,
  tagline: string,
  first_brewed: string,
  description: string,
  image_url: string,
  abv: number,
  ibu: number,
  target_fg: number,
  target_og: number,
  ebc: number,
  src:number,
  ph: number,
  attenuation_level: number,
  volume: Volumn,
  boil_volume: Volumn,
  method: Method,
  ingredients: Ingredients,
  food_paring: [],
  brewers_tips: string,
  contributed_by: string
}

interface Ingredients{
  malt: [],
  hops: [],
  yeast: string
}

interface Method {
  mash_temp: [],
  fermentation: object,
  twist: string
}

interface Volumn {
  value: number,
  unit: string
}

interface SyntheticEvent {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  target: EventTarget;
  timeStamp: Date;
  type: string;
}