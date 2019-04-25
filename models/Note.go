package models

import (
	"time"
)

type Note struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Content			string			`gorm:"text"`
	Author			User			`gorm:"foreignkey:UserID"`
	UserID			int				// FOREIGN KEY
	Note			float32
	CreatedAt		*time.Time		`json:"creationDate,omitempty"`
	UpdatedAt		*time.Time		`json:"updateDate,omitempty"`
}