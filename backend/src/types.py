from datetime import datetime
from typing import Optional, NewType, List

from pydantic import BaseModel

UserId = NewType('UserId', str)
Measurement = NewType('Measurement', str)

class Resource(BaseModel):
    name: str
    avg_price: Optional[float]
    measurement: Measurement  # e.g. kgs, lbs, liters, etc


class User(BaseModel):
    userId: UserId
    is_active: bool


class Constraint(BaseModel):
    resource: Resource
    min_constraint: Optional[float]  # to denote that I need at least this much
    max_constraint: Optional[float]  # to denote that I can give at most this much
    

class Giver(BaseModel):
    user: User
    resource: Resource
    constraints: List[Constraint]


class Taker(BaseModel):
    user: User
    resource: Resource
    constraints: List[Constraint]


class Transaction(BaseModel):
    giver: Giver
    taker: Taker
    occuredAt: datetime
    notes: Optional[str]