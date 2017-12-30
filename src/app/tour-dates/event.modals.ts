
import {Venue} from './venue.modals'

export interface Event{
    id: string
    artist_id :string
    url :string
    on_sale_datetime :string
    datetime :string
    description : string
    venue: Venue
    offers :Array<string>
    lineup :Array<string>
}