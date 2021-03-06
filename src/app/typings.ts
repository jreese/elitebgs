import * as mongoosePaginate from 'mongoose-paginate';
import { PaginateResult } from 'mongoose';

interface BodySchema {
    _id: string;
    __v: number;
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    name_lower: string;
    system_id: number;
    group_id: number;
    group_name: string;
    type_id: number;
    type_name: string;
    distance_to_arrival: number;
    full_spectral_class: string;
    spectral_class: string;
    spectral_sub_class: string;
    luminosity_class: string;
    luminosity_sub_class: string;
    surface_temperature: number;
    is_main_star: boolean;
    age: number;
    solar_masses: number;
    solar_radius: number;
    catalogue_gliese_id: string;
    catalogue_hipp_id: string;
    catalogue_hd_id: string;
    volcanism_type_id: number;
    volcanism_type_name: string;
    atmosphere_type_id: number;
    atmosphere_type_name: string;
    terraforming_state_id: number;
    terraforming_state_name: string;
    earth_masses: number;
    radius: number;
    gravity: number;
    surface_pressure: number;
    orbital_period: number;
    semi_major_axis: number;
    orbital_eccentricity: number;
    orbital_inclination: number;
    arg_of_periapsis: number;
    rotational_period: number;
    is_rotational_period_tidally_locked: boolean;
    axis_tilt: number;
    eg_id: number;
    belt_moon_masses: number;
    ring_type_id: number;
    ring_type_name: string;
    ring_mass: number;
    ring_inner_radius: number;
    ring_outer_radius: number;
    rings: {
        _id: string;
        id: number;
        created_at: string;
        updated_at: string;
        name: string;
        name_lower: string;
        semi_major_axis: number;
        ring_type_id: number;
        ring_type_name: string;
        ring_mass: number;
        ring_inner_radius: number;
        ring_outer_radius: number;
    }[];
    atmosphere_composition: {
        _id: string;
        atmosphere_component_id: number;
        share: number;
        atmosphere_component_name: string;
    }[];
    solid_composition: {
        _id: string;
        solid_component_id: number;
        share: number;
        solid_component_name: string;
    }[];
    materials: {
        _id: string;
        material_id: number;
        share: number;
        material_name: string;
    }[];
    is_landable: boolean;
}

interface CommoditySchema {
    _id: string;
    __v: number;
    id: number;
    station_id: number;
    commodity_id: number;
    supply: number;
    buy_price: number;
    sell_price: number;
    demand: number;
    collected_at: string;
}

interface EBGSFactionSchema {
    _id: string;
    __v: number;
    eddb_id: number;
    name: string;
    name_lower: string;
    updated_at: string;
    government: string;
    allegiance: string;
    home_system_name: string;
    is_player_faction: boolean;
    faction_presence: {
        system_name: string;
        system_name_lower: string;
    }[];
    history: {
        updated_at: string;
        system: string;
        system_lower: string;
        state: string;
        influence: number;
        pending_states: {
            state: string;
            trend: number;
        }[];
        recovering_states: {
            state: string;
            trend: number;
        }[];
    }[];
}

interface EBGSSystemSchema {
    _id: string;
    __v: number;
    eddb_id: number;
    edsm_id: number;
    name: string;
    name_lower: string;
    x: number;
    y: number;
    z: number;
    population: number;
    government: string;
    allegiance: string;
    state: string;
    security: string;
    primary_economy: string;
    power: string[];
    power_state: string;
    needs_permit: boolean;
    updated_at: string;
    simbad_ref: string;
    controlling_minor_faction: string;
    reserve_type: string;
    minor_faction_presences: {
        name: string;
        name_lower: string;
    }[];
}

interface FactionSchema {
    _id: string;
    __v: number;
    id: number;
    name: string;
    name_lower: string;
    updated_at: string;
    government_id: number;
    government: string;
    allegiance_id: number;
    allegiance: string;
    state_id: number;
    state: string;
    home_system_id: number;
    is_player_faction: boolean;
}

interface PopulatedSystemSchema {
    _id: string;
    __v: number;
    id: number;
    edsm_id: number;
    name: string;
    name_lower: string;
    x: number;
    y: number;
    z: number;
    population: number;
    is_populated: boolean;
    government_id: number;
    government: string;
    allegiance_id: number;
    allegiance: string;
    state_id: number;
    state: string;
    security_id: number;
    security: string;
    primary_economy_id: number;
    primary_economy: string;
    power: string;
    power_state: string;
    power_state_id: number;
    needs_permit: boolean;
    updated_at: string;
    simbad_ref: string;
    controlling_minor_faction_id: number;
    controlling_minor_faction: string;
    reserve_type_id: number;
    reserve_type: string;
    minor_faction_presences: {
        _id: string;
        minor_faction_id: number;
        state_id: number;
        state: string;
        influence: number
    }[];
}

interface StationSchema {
    _id: string;
    __v: number;
    id: number;
    name: string;
    name_lower: string;
    system_id: number;
    updated_at: string;
    max_landing_pad_size: string;
    distance_to_star: number;
    government_id: number;
    government: string;
    allegiance_id: number;
    allegiance: string;
    state_id: number;
    state: string;
    type_id: number;
    type: string;
    has_blackmarket: boolean;
    has_market: boolean;
    has_refuel: boolean;
    has_repair: boolean;
    has_rearm: boolean;
    has_outfitting: boolean;
    has_shipyard: boolean;
    has_docking: boolean;
    has_commodities: boolean;
    import_commodities: {
        _id: string;
        name: string;
        name_lower: string;
    }[];
    export_commodities: {
        _id: string;
        name: string;
        name_lower: string;
    }[];
    prohibited_commodities: {
        _id: string;
        name: string;
        name_lower: string;
    }[];
    economies: {
        name: string;
        name_lower: string;
    }[];
    shipyard_updated_at: string;
    outfitting_updated_at: string;
    market_updated_at: string;
    is_planetary: boolean;
    selling_ships: {
        _id: string;
        name: string;
        name_lower: string;
    }[];
    selling_modules: number[];
    settlement_size_id: number;
    settlement_size: string;
    settlement_security_id: number;
    settlement_security: string;
    body_id: number;
    controlling_minor_faction_id: number;
}

interface SystemSchema {
    _id: string;
    __v: number;
    id: number;
    edsm_id: number;
    name: string;
    name_lower: string;
    x: number;
    y: number;
    z: number;
    population: number;
    is_populated: boolean;
    government_id: number;
    government: string;
    allegiance_id: number;
    allegiance: string;
    state_id: number;
    state: string;
    security_id: number;
    security: string;
    primary_economy_id: number;
    primary_economy: string;
    power: string;
    power_state: string;
    power_state_id: number;
    needs_permit: boolean;
    updated_at: string;
    simbad_ref: string;
    controlling_minor_faction_id: number;
    controlling_minor_faction: string;
    reserve_type_id: number;
    reserve_type: string;
}

export interface EBGSFactionV3Schema {
    _id: string;
    __v: number;
    eddb_id: number;
    name: string;
    name_lower: string;
    updated_at: string;
    government: string;
    allegiance: string;
    home_system_name: string;
    is_player_faction: boolean;
    faction_presence: {
        system_name: string;
        system_name_lower: string;
        state: string;
        influence: number;
        pending_states: {
            state: string;
            trend: number;
        }[];
        recovering_states: {
            state: string;
            trend: number;
        }[];
    }[];
    history: {
        updated_at: string;
        updated_by: string;
        system: string;
        system_lower: string;
        state: string;
        influence: number;
        pending_states: {
            state: string;
            trend: number;
        }[];
        recovering_states: {
            state: string;
            trend: number;
        }[];
        systems: {
            name: string;
            name_lower: string;
        }[];
    }[];
}

export interface EBGSSystemV3Schema {
    _id: string;
    __v: number;
    eddb_id: number;
    name: string;
    name_lower: string;
    x: number;
    y: number;
    z: number;
    population: number
    government: string;
    allegiance: string;
    state: string
    security: string;
    primary_economy: string;
    needs_permit: boolean
    reserve_type: string
    controlling_minor_faction: string;
    factions: {
        name: string;
        name_lower: string;
    }[];
    updated_at: string;
    history: {
        updated_at: string;
        updated_by: string;
        population: number;
        government: string;
        allegiance: string;
        state: string;
        security: string;
        controlling_minor_faction: string;
        factions: {
            name: string;
            name_lower: string;
        }[];
    }[];
}

interface EBGSFactionV3SchemaWOHistory {
    _id: string;
    __v: number;
    eddb_id: number;
    name: string;
    name_lower: string;
    updated_at: string;
    government: string;
    allegiance: string;
    home_system_name: string;
    is_player_faction: boolean;
    faction_presence: {
        system_name: string;
        system_name_lower: string;
        state: string;
        influence: number;
        pending_states: {
            state: string;
            trend: number;
        }[];
        recovering_states: {
            state: string;
            trend: number;
        }[];
    }[];
}

export interface EBGSSystemV3SchemaWOHistory {
    _id: string;
    __v: number;
    eddb_id: number;
    name: string;
    name_lower: string;
    x: number;
    y: number;
    z: number;
    population: number
    government: string;
    allegiance: string;
    state: string
    security: string;
    primary_economy: string;
    needs_permit: boolean
    reserve_type: string
    controlling_minor_faction: string;
    factions: {
        name: string;
        name_lower: string;
    }[];
    updated_at: string;
}

interface EBGSUserSchema {
    _id: string;
    __v: number;
    id: string;
    username: string;
    email: string;
    avatar: string;
    discriminator: string;
    access: number;
    invite: string;
    invite_used: boolean;
    guilds: {
        id: string;
        name: string;
        icon: string;
    }[];
    factions: {
        name: string;
        name_lower: string;
    }[];
    systems: {
        name: string;
        name_lower: string;
    }[];
    editable_factions: {
        name: string;
        name_lower: string;
    }[];
}

type EBGSSystemFaction = EBGSSystemV3Schema['factions'][0];

interface EBGSSystemFactionChartSchema extends EBGSSystemFaction {
    influence: number;
    state: string;
    pending_states: {
        state: string;
        trend: number;
    }[];
    recovering_states: {
        state: string;
        trend: number;
    }[];
}

interface EBGSSystemChartSchema extends EBGSSystemV3Schema {
    factions: EBGSSystemFactionChartSchema[];
}

interface EBGSSystemPostHistorySchema {
    _id: string;
    population: number
    government: string;
    allegiance: string;
    state: string
    security: string;
    controlling_minor_faction: string;
    factions: {
        name: string;
        name_lower: string;
    }[];
}

interface EBGSFactionPostHistorySchema {
    _id: string;
    faction_presence: {
        system_name: string;
        system_name_lower: string;
        state: string;
        influence: number;
        pending_states: {
            state: string;
            trend: number;
        }[];
        recovering_states: {
            state: string;
            trend: number;
        }[];
    }[];
}

export type BodiesV1 = BodySchema;
export type CommoditiesV1 = CommoditySchema;
export type EBGSFactionsV1 = EBGSFactionSchema;
export type EBGSSystemsV1 = EBGSSystemSchema;
export type FactionsV1 = FactionSchema;
export type PopulatedSystemsV1 = PopulatedSystemSchema;
export type StationsV1 = StationSchema;
export type SystemsV1 = SystemSchema;

export type BodiesV2 = PaginateResult<BodySchema>;
export type EBGSFactionsV2 = PaginateResult<EBGSFactionSchema>;
export type EBGSSystemsV2 = PaginateResult<EBGSSystemSchema>;
export type FactionsV2 = PaginateResult<FactionSchema>;
export type PopulatedSystemsV2 = PaginateResult<PopulatedSystemSchema>;
export type StationsV2 = PaginateResult<StationSchema>;
export type SystemsV2 = PaginateResult<SystemSchema>;

export type EBGSFactionsV3 = PaginateResult<EBGSFactionV3Schema>;
export type EBGSSystemsV3 = PaginateResult<EBGSSystemV3Schema>;
export type EBGSFactionsV3WOHistory = PaginateResult<EBGSFactionV3SchemaWOHistory>;
export type EBGSSystemsV3WOHistory = PaginateResult<EBGSSystemV3SchemaWOHistory>;

export type EBGSUser = EBGSUserSchema;

export type EBGSSystemFactionChart = EBGSSystemFactionChartSchema;
export type EBGSSystemChart = EBGSSystemChartSchema;

export type EBGSSystemPostHistory = EBGSSystemPostHistorySchema;
export type EBGSFactionPostHistory = EBGSFactionPostHistorySchema;
