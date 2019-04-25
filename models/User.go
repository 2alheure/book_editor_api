package models

import (
	"time"
)

type mUser struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Pseudo			string			`json:"pseudo,omitempty"`
	Login			string			`json:"login,omitempty"`
	Password		string			`json:"-"`
	Email			string			`json:"email,omitempty"`
	Subscribers		[]*User			`gorm:"many2many:user_subscribers;association_jointable_foreignkey:subscriber_id"`		// len() to get the number
	CreatedAt		*time.Time		`json:"signUpDate,omitempty"`
}
