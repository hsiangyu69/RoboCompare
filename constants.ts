
import { RobotVacuum } from './types';

export const INITIAL_ROBOTS: RobotVacuum[] = [
  {
    id: '1',
    brand: 'Roborock',
    model: 'S8 MaxV Ultra',
    price: 1399,
    suctionPower: 10000,
    canMop: true,
    climbingThreshold: 20,
    batteryLife: 180,
    rating: 4.9,
    features: ['DuoRoller Riser Brush', 'VibraRise 3.0', 'Reactive AI 2.0', 'Auto-Empty Dock'],
    imageUrl: 'https://picsum.photos/seed/roborock-s8/400/300',
    link: '#'
  },
  {
    id: '2',
    brand: 'Dreame',
    model: 'X40 Ultra',
    price: 1199,
    suctionPower: 12000,
    canMop: true,
    climbingThreshold: 22,
    batteryLife: 260,
    rating: 4.8,
    features: ['Side Brush Extension', 'Mop Extension', 'Anti-Tangle Brush', '75°C Hot Water Mop Wash'],
    imageUrl: 'https://picsum.photos/seed/dreame-x40/400/300',
    link: '#'
  },
  {
    id: '3',
    brand: 'iRobot',
    model: 'Roomba Combo j9+',
    price: 999,
    suctionPower: 4500,
    canMop: true,
    climbingThreshold: 18,
    batteryLife: 120,
    rating: 4.5,
    features: ['Retractable Mop', 'PrecisionVision Navigation', 'Duo-Multi Surface Brushes', 'SmartScrub'],
    imageUrl: 'https://picsum.photos/seed/roomba-j9/400/300',
    link: '#'
  },
  {
    id: '4',
    brand: 'Dyson',
    model: '360 Vis Nav',
    price: 1199,
    suctionPower: 8500,
    canMop: false,
    climbingThreshold: 21,
    batteryLife: 65,
    rating: 4.3,
    features: ['360° Vision System', 'Piezo Sensor', 'Edge Actuator', 'Hyperdymium Motor'],
    imageUrl: 'https://picsum.photos/seed/dyson-vis/400/300',
    link: '#'
  },
  {
    id: '5',
    brand: 'Eufy',
    model: 'X10 Pro Omni',
    price: 799,
    suctionPower: 8000,
    canMop: true,
    climbingThreshold: 20,
    batteryLife: 180,
    rating: 4.7,
    features: ['MopMaster 2.0', 'AI.See', 'Detangling Roller', 'Auto-Emptying Station'],
    imageUrl: 'https://picsum.photos/seed/eufy-x10/400/300',
    link: '#'
  },
  {
    id: '6',
    brand: 'Ecovacs',
    model: 'Deebot T30 Omni',
    price: 849,
    suctionPower: 11000,
    canMop: true,
    climbingThreshold: 20,
    batteryLife: 200,
    rating: 4.6,
    features: ['ZeroTangle Tech', 'TruEdge Adaptive Edge Mopping', 'Mini OMNI Station'],
    imageUrl: 'https://picsum.photos/seed/ecovacs-t30/400/300',
    link: '#'
  }
];
