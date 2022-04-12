import React from 'react';

type Props = {
  enabled: boolean,
  onUpdate: (creatureId: string) => void
}
export default class CreaturePortraitSelect extends React.Component<Props> {

  render() {
    return (
      <>
        <h3>Creature</h3>
        <select onChange={e => this.props.onUpdate(e.target.value)}>
          <optgroup label='Leshy'>
            <option value='Adder'>Adder</option>
            <option value='Alpha'>Alpha</option>
            <option value='Amalgam'>Amalgam</option>
            <option value='Amoeba'>Amoeba</option>
            <option value='Ant'>Worker Ant</option>
            <option value='AntQueen'>Ant Queen</option>
            <option value='Bat'>Bat</option>
            <option value='Beaver'>Beaver</option>
            <option value='Bee'>Bee</option>
            <option value='Beehive'>Beehive</option>
            <option value='Bloodhound'>Bloodhound</option>
            <option value='Boulder'>Boulder</option>
            <option value='Bullfrog'>Bullfrog</option>
            <option value='CagedWolf'> Caged Wolf</option>
            <option value='Cat'>Cat</option>
            <option value='CatUndead'>Undead Cat</option>
            <option value='Cockroach'>Cockroach</option>
            <option value='Coyote'>Coyote</option>
            <option value='Daus'>The Daus</option>
            <option value='Elk'>Elk</option>
            <option value='ElkCub'>Elk Fawn</option>
            <option value='FieldMouse'>Field Mice</option>
            <option value='Geck'>Geck</option>
            <option value='Goat'>Black Goat</option>
            {/* <option value='GoatSexy'>Black Goat</option> */}
            <option value='Grizzly'>Grizzly</option>
            <option value='JerseyDevil'>Child 13</option>
            {/* <option value='JerseyDevilFlying'>Child 13 (Flying)</option> */}
            <option value='Kingfisher'>Kingfisher</option>
            <option value='Maggots'>Corpse Maggots</option>
            <option value='Magpie'>Magpie</option>
            <option value='Mantis'>Mantis</option>
            <option value='MantisGod'>Mantis God</option>
            <option value='Mole'>Mole</option>
            <option value='MoleMan'>Mole Man</option>
            <option value='Moose'>Moose Buck</option>
            <option value='Mothman_Stage1'>Mothman (Stage 1)</option>
            <option value='Mothman_Stage2'>Mothman (Stage 2)</option>
            <option value='Mothman_Stage3'>Mothman (Stage 3)</option>
            <option value='Mule'>Pack Mule</option>
            <option value='Opossum'>Opossum</option>
            <option value='Otter'>River Otter</option>
            <option value='Ouroboros'>Ouroboros</option>
            <option value='PackRat'>Pack Rat</option>
            <option value='Porcupine'>Porcupine</option>
            <option value='Pronghorn'>Pronghorn</option>
            <option value='Rabbit'>Rabbit</option>
            <option value='RatKing'>Rat King</option>
            <option value='Rattler'>Rattler</option>
            <option value='Raven'>Raven</option>
            <option value='RavenEgg'>Raven Egg</option>
            <option value='Shark'>Great White</option>
            <option value='Skink'>Skink</option>
            <option value='Skunk'>Skunk</option>
            <option value='Snapper'>River Snapper</option>
            <option value='Sparrow'>Sparrow</option>
            <option value='SquidBell'>Bell Tentacle</option>
            <option value='SquidCards'>Hand Tentacle</option>
            <option value='SquidMirror'>Mirror Tentacle</option>
            <option value='Squirrel'>Squirrel</option>
            <option value='SkinkTail'>Tail (Skink)</option>
            <option value='Tail_Bird'>Tail (Bird)</option>
            <option value='Tail_Furry'>Tail (Canine)</option>
            <option value='Tail_Insect'>Tail (Insect)</option>
            <option value='Urayuli'>Urayuli</option>
            <option value='Vulture'>Turkey Vulture</option>
            <option value='Warren'>Warren</option>
            <option value='Wolf'>Wolf</option>
            <option value='WolfCub'>Wolf Cub</option>
            <option value='BaitBucket'>Bait Bucket</option>
            <option value='Dam'>Dam</option>
            <option value='DausBell'>Chime</option>
            <option value='GoldNugget'>Gold Nugget</option>
            <option value='PeltGolden'>Golden Pelt</option>
            <option value='PeltHare'>Rabbit Pelt</option>
            <option value='PeltWolf'>Wolf Pelt</option>
            <option value='RingWorm'>Ring Worm</option>
            <option value='Smoke'>The Smoke</option>
            <option value='Smoke_Improved'>Greater Smoke</option>
            <option value='Starvation'>Starvation</option>
            <option value='Trap'>Leaping Trap</option>
            <option value='TrapFrog'>Strange Frog</option>
            <option value='FrozenOpossum'>Frozen Opossum</option>
            <option value='Tree_SnowCovered'>Snowy Fir</option>
            <option value='Tree'>Grand Fir</option>
            <option value='Stump'>Stump</option>
            <option value='Stinkbug_Talking'>Stinkbug (Talking)</option>
            <option value='Stoat_Talking'>Stoat (Talking)</option>
            <option value='Wolf_Talking'>Wolf (Talking)</option>
          </optgroup>
          <optgroup label='Grimora'>
            <option value='Skeleton'>Skeleton</option>
            <option value='Banshee'>Banshee</option>
            <option value='Bonehound'>Bonehound</option>
            <option value='FrankNStein'>Frank &amp; Stein</option>
            <option value='Gravedigger'>Gravedigger</option>
            <option value='Revenant'>Revenant</option>
          </optgroup>
        </select>
      </>
    )
  }
}
